import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent655Component } from './test-component655.component';

describe('TestComponent655Component', () => {
  let component: TestComponent655Component;
  let fixture: ComponentFixture<TestComponent655Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent655Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
