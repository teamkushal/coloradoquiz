import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1372Component } from './test-component1372.component';

describe('TestComponent1372Component', () => {
  let component: TestComponent1372Component;
  let fixture: ComponentFixture<TestComponent1372Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1372Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
