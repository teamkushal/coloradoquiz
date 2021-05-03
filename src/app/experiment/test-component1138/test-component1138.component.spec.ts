import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1138Component } from './test-component1138.component';

describe('TestComponent1138Component', () => {
  let component: TestComponent1138Component;
  let fixture: ComponentFixture<TestComponent1138Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1138Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
