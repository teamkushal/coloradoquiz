import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2997Component } from './test-component2997.component';

describe('TestComponent2997Component', () => {
  let component: TestComponent2997Component;
  let fixture: ComponentFixture<TestComponent2997Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2997Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
