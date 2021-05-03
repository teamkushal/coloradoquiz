import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1037Component } from './test-component1037.component';

describe('TestComponent1037Component', () => {
  let component: TestComponent1037Component;
  let fixture: ComponentFixture<TestComponent1037Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1037Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
