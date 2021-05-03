import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent716Component } from './test-component716.component';

describe('TestComponent716Component', () => {
  let component: TestComponent716Component;
  let fixture: ComponentFixture<TestComponent716Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent716Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
