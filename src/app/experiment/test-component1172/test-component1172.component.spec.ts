import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1172Component } from './test-component1172.component';

describe('TestComponent1172Component', () => {
  let component: TestComponent1172Component;
  let fixture: ComponentFixture<TestComponent1172Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1172Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
