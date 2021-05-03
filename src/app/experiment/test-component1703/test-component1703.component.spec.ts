import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1703Component } from './test-component1703.component';

describe('TestComponent1703Component', () => {
  let component: TestComponent1703Component;
  let fixture: ComponentFixture<TestComponent1703Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1703Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
