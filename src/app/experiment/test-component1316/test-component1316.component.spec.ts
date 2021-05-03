import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1316Component } from './test-component1316.component';

describe('TestComponent1316Component', () => {
  let component: TestComponent1316Component;
  let fixture: ComponentFixture<TestComponent1316Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1316Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
