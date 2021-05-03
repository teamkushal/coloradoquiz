import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1872Component } from './test-component1872.component';

describe('TestComponent1872Component', () => {
  let component: TestComponent1872Component;
  let fixture: ComponentFixture<TestComponent1872Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1872Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
