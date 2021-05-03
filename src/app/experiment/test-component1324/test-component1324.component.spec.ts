import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1324Component } from './test-component1324.component';

describe('TestComponent1324Component', () => {
  let component: TestComponent1324Component;
  let fixture: ComponentFixture<TestComponent1324Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1324Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
