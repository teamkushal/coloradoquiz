import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent673Component } from './test-component673.component';

describe('TestComponent673Component', () => {
  let component: TestComponent673Component;
  let fixture: ComponentFixture<TestComponent673Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent673Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
