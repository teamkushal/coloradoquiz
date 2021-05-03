import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1159Component } from './test-component1159.component';

describe('TestComponent1159Component', () => {
  let component: TestComponent1159Component;
  let fixture: ComponentFixture<TestComponent1159Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1159Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
