import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2217Component } from './test-component2217.component';

describe('TestComponent2217Component', () => {
  let component: TestComponent2217Component;
  let fixture: ComponentFixture<TestComponent2217Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2217Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
