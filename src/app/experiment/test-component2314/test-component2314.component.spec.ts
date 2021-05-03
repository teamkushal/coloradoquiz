import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2314Component } from './test-component2314.component';

describe('TestComponent2314Component', () => {
  let component: TestComponent2314Component;
  let fixture: ComponentFixture<TestComponent2314Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2314Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
