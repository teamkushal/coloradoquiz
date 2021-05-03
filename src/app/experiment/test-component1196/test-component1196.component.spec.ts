import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1196Component } from './test-component1196.component';

describe('TestComponent1196Component', () => {
  let component: TestComponent1196Component;
  let fixture: ComponentFixture<TestComponent1196Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1196Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
