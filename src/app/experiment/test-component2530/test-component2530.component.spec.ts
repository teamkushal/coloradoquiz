import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2530Component } from './test-component2530.component';

describe('TestComponent2530Component', () => {
  let component: TestComponent2530Component;
  let fixture: ComponentFixture<TestComponent2530Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2530Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
