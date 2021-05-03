import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent897Component } from './test-component897.component';

describe('TestComponent897Component', () => {
  let component: TestComponent897Component;
  let fixture: ComponentFixture<TestComponent897Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent897Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
