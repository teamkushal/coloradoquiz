import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1337Component } from './test-component1337.component';

describe('TestComponent1337Component', () => {
  let component: TestComponent1337Component;
  let fixture: ComponentFixture<TestComponent1337Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1337Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
