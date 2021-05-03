import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1361Component } from './test-component1361.component';

describe('TestComponent1361Component', () => {
  let component: TestComponent1361Component;
  let fixture: ComponentFixture<TestComponent1361Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1361Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
