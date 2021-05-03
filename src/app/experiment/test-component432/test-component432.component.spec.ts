import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent432Component } from './test-component432.component';

describe('TestComponent432Component', () => {
  let component: TestComponent432Component;
  let fixture: ComponentFixture<TestComponent432Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent432Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
