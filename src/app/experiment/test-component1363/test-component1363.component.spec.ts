import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1363Component } from './test-component1363.component';

describe('TestComponent1363Component', () => {
  let component: TestComponent1363Component;
  let fixture: ComponentFixture<TestComponent1363Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1363Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
