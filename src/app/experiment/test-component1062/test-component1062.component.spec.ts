import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1062Component } from './test-component1062.component';

describe('TestComponent1062Component', () => {
  let component: TestComponent1062Component;
  let fixture: ComponentFixture<TestComponent1062Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1062Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
