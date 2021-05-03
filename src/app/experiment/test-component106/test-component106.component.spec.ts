import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent106Component } from './test-component106.component';

describe('TestComponent106Component', () => {
  let component: TestComponent106Component;
  let fixture: ComponentFixture<TestComponent106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent106Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
