import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1553Component } from './test-component1553.component';

describe('TestComponent1553Component', () => {
  let component: TestComponent1553Component;
  let fixture: ComponentFixture<TestComponent1553Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1553Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
