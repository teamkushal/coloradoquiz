import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1603Component } from './test-component1603.component';

describe('TestComponent1603Component', () => {
  let component: TestComponent1603Component;
  let fixture: ComponentFixture<TestComponent1603Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1603Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
