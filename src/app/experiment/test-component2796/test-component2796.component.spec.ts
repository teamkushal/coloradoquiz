import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2796Component } from './test-component2796.component';

describe('TestComponent2796Component', () => {
  let component: TestComponent2796Component;
  let fixture: ComponentFixture<TestComponent2796Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2796Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
