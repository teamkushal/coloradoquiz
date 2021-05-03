import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent444Component } from './test-component444.component';

describe('TestComponent444Component', () => {
  let component: TestComponent444Component;
  let fixture: ComponentFixture<TestComponent444Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent444Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
