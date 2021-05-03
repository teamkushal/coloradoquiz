import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent483Component } from './test-component483.component';

describe('TestComponent483Component', () => {
  let component: TestComponent483Component;
  let fixture: ComponentFixture<TestComponent483Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent483Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
