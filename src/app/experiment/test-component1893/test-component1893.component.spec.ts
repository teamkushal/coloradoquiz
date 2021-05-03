import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1893Component } from './test-component1893.component';

describe('TestComponent1893Component', () => {
  let component: TestComponent1893Component;
  let fixture: ComponentFixture<TestComponent1893Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1893Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
