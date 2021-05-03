import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2132Component } from './test-component2132.component';

describe('TestComponent2132Component', () => {
  let component: TestComponent2132Component;
  let fixture: ComponentFixture<TestComponent2132Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2132Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
