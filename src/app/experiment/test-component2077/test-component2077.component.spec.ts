import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2077Component } from './test-component2077.component';

describe('TestComponent2077Component', () => {
  let component: TestComponent2077Component;
  let fixture: ComponentFixture<TestComponent2077Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2077Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
