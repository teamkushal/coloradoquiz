import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2071Component } from './test-component2071.component';

describe('TestComponent2071Component', () => {
  let component: TestComponent2071Component;
  let fixture: ComponentFixture<TestComponent2071Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2071Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
