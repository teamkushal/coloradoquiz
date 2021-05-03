import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent755Component } from './test-component755.component';

describe('TestComponent755Component', () => {
  let component: TestComponent755Component;
  let fixture: ComponentFixture<TestComponent755Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent755Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
