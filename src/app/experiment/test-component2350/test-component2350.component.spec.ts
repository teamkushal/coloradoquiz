import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2350Component } from './test-component2350.component';

describe('TestComponent2350Component', () => {
  let component: TestComponent2350Component;
  let fixture: ComponentFixture<TestComponent2350Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2350Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
