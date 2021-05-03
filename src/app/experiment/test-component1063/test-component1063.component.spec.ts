import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1063Component } from './test-component1063.component';

describe('TestComponent1063Component', () => {
  let component: TestComponent1063Component;
  let fixture: ComponentFixture<TestComponent1063Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1063Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
