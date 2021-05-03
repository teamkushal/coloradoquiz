import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2779Component } from './test-component2779.component';

describe('TestComponent2779Component', () => {
  let component: TestComponent2779Component;
  let fixture: ComponentFixture<TestComponent2779Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2779Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
