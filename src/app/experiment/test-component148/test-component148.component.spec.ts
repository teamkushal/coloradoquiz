import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent148Component } from './test-component148.component';

describe('TestComponent148Component', () => {
  let component: TestComponent148Component;
  let fixture: ComponentFixture<TestComponent148Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent148Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
