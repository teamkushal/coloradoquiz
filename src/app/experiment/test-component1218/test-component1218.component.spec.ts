import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1218Component } from './test-component1218.component';

describe('TestComponent1218Component', () => {
  let component: TestComponent1218Component;
  let fixture: ComponentFixture<TestComponent1218Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1218Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
