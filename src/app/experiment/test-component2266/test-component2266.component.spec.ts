import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2266Component } from './test-component2266.component';

describe('TestComponent2266Component', () => {
  let component: TestComponent2266Component;
  let fixture: ComponentFixture<TestComponent2266Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2266Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
