import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent349Component } from './test-component349.component';

describe('TestComponent349Component', () => {
  let component: TestComponent349Component;
  let fixture: ComponentFixture<TestComponent349Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent349Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
