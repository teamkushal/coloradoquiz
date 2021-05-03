import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1735Component } from './test-component1735.component';

describe('TestComponent1735Component', () => {
  let component: TestComponent1735Component;
  let fixture: ComponentFixture<TestComponent1735Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1735Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
