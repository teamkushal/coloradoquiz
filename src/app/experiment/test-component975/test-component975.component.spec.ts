import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent975Component } from './test-component975.component';

describe('TestComponent975Component', () => {
  let component: TestComponent975Component;
  let fixture: ComponentFixture<TestComponent975Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent975Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
