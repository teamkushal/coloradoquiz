import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2339Component } from './test-component2339.component';

describe('TestComponent2339Component', () => {
  let component: TestComponent2339Component;
  let fixture: ComponentFixture<TestComponent2339Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2339Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
