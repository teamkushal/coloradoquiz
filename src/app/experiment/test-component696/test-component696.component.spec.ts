import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent696Component } from './test-component696.component';

describe('TestComponent696Component', () => {
  let component: TestComponent696Component;
  let fixture: ComponentFixture<TestComponent696Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent696Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
