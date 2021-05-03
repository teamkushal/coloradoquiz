import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1654Component } from './test-component1654.component';

describe('TestComponent1654Component', () => {
  let component: TestComponent1654Component;
  let fixture: ComponentFixture<TestComponent1654Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1654Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
