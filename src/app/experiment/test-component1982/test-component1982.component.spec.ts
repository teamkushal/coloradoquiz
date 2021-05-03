import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1982Component } from './test-component1982.component';

describe('TestComponent1982Component', () => {
  let component: TestComponent1982Component;
  let fixture: ComponentFixture<TestComponent1982Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1982Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
