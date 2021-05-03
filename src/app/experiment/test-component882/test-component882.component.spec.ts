import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent882Component } from './test-component882.component';

describe('TestComponent882Component', () => {
  let component: TestComponent882Component;
  let fixture: ComponentFixture<TestComponent882Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent882Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
