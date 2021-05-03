import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1162Component } from './test-component1162.component';

describe('TestComponent1162Component', () => {
  let component: TestComponent1162Component;
  let fixture: ComponentFixture<TestComponent1162Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1162Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
