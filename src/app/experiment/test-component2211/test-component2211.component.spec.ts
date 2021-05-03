import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2211Component } from './test-component2211.component';

describe('TestComponent2211Component', () => {
  let component: TestComponent2211Component;
  let fixture: ComponentFixture<TestComponent2211Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2211Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
