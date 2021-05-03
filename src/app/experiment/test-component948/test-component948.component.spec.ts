import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent948Component } from './test-component948.component';

describe('TestComponent948Component', () => {
  let component: TestComponent948Component;
  let fixture: ComponentFixture<TestComponent948Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent948Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
