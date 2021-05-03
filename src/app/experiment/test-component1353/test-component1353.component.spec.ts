import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1353Component } from './test-component1353.component';

describe('TestComponent1353Component', () => {
  let component: TestComponent1353Component;
  let fixture: ComponentFixture<TestComponent1353Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1353Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
