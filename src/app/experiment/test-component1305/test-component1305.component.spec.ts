import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1305Component } from './test-component1305.component';

describe('TestComponent1305Component', () => {
  let component: TestComponent1305Component;
  let fixture: ComponentFixture<TestComponent1305Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1305Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
