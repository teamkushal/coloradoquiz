import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent900Component } from './test-component900.component';

describe('TestComponent900Component', () => {
  let component: TestComponent900Component;
  let fixture: ComponentFixture<TestComponent900Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent900Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
